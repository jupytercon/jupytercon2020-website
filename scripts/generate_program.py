from pathlib import Path
from textwrap import indent

import pandas as pd

SESSIONS_SPEAKERS = '2020-09-03-presentation-speakers.csv'
SESSIONS = '2020-09-07-sessions.csv'
CONFIRM_COLUMN = 'Confirmed (Y=confirm, N=Deny, P=confirm/switch to poster)'
OUT = '../pages/program.vue'

sessions_speakers = pd.read_csv(SESSIONS_SPEAKERS)

sessions = pd.read_csv(SESSIONS).set_index(['Number'])
# TODO: handle posters
confirmed = sessions[sessions[CONFIRM_COLUMN] == 'Y']

# TODO: concat and add all the speakers for the same talk
joined = confirmed.join(sessions_speakers, on=['Number'], rsuffix='_r', sort=True)
joined = joined[['Number', 'Title']]

data = indent(joined.to_json(orient='records', indent=4), prefix=' ' * 16)
page = f"""
<template>
    <div>
        <BlockHeaderPlain title="Program">
            <template v-slot:side-content>
            </template>
        </BlockHeaderPlain>
        <div class="main">
            <h1>List of Talks (preview)</h1>
            <p>
                <em>The full program and schedule will be available soon.</em>
            </p>
            <ul v-for="talk in talks">
                <li>{{{{ talk.Title }}}}</li>
            </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import BlockHeaderPlain from "../components/BlockHeaderPlain";
    import DesktopFooter from "../components/DesktopFooter";

    export default {{
        name: "talks",
        data() {{
            return {{
                talks: {data}
            }}
        }},
        components: {{DesktopFooter, BlockHeaderPlain}}
    }}
</script>

<style scoped lang="scss">
    @import 'assets/scss/settings';
    h1 {{
        font-size: 36px;
    }}
    h2 {{
        font-size: 24px;
    }}
    h3 {{
        font-size: 16px;
    }}
    h1, h2, h3 {{
        color: $figma-orange;
    }}
    .main {{
        background-color: $figma-grey3;
        padding: 100px;
    }}
</style>
"""

with open(OUT, 'w') as f:
  f.write(page)

