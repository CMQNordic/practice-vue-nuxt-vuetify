<template>
  <div class="content-wrapper">

    <v-container>
      <v-row>
        <v-col>
          <v-btn>BUTTON</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-sheet class="my-sheet" elevation="1">
      v-container (red):<br>
      By default v-container element have padding of 12px on all sides, and a margin right/left set to auto in order to center the container
      element in the middle of the parent (or if content is large fill up whole parent).<br>
      In order to make sure container fill up all parent space and row/col do not have margins nor paddings use: <br>
      &lt;v-container fluid pa-0>&lt;/v-container>
      <br><br>
      v-row (yellow):<br>
      By default row do not have any padding. Margin right/left is internally negative to match the padding of the parent container - in order
      to fill up whole container. It algins with other rows end-to-end as well visually fills up thole container. Note! If margin right/left is
      applied on a row then the margins of the parens on each side are visible!
      <br><br>
      v-col (gray):<br>
      By default col stretches over whole remaining area of the parent. 1 column has 12 as default, 2 column 6 and so on.
      By default col do have a padding of 12 px from all sides. This makes content in columns next to each other be a bir apart from each other.
      In order to lower this space (the padding of columns) we can set dense on the parent v-row element:<br>
      &lt;v-row dense >&lt;/v-row>.
      <br>
      In order to remove padding total in column then add "no-gutters" on the parent v-row.
      <br>
    </v-sheet>

    <v-container fluid pa-0>
      <v-row no-gutters>
        <v-col>
          <v-btn>BUTTON</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-sheet class="my-sheet" elevation="1">
      in the code above wi use fluid pa-0 and no-gutters.
    </v-sheet>

    <v-container class="dbg-container">
      <v-row>
        <v-btn depressed class="green" block>Button directly in row</v-btn>
      </v-row>

      <v-row class="dbg-wrapper">
        <v-btn depressed class="green" block>Button directly in row</v-btn>
      </v-row>

      <v-row class="dbg-wrapper">
        <v-col class="dbg-wrapper">
          <v-btn depressed class="green" block>Button in column 1</v-btn>
        </v-col>
        <v-col class="dbg-wrapper">
          <v-btn depressed class="green" block>Button in column 2</v-btn>
        </v-col>
      </v-row>

      <v-row class="dbg-wrapper">
        <v-col class="dbg-wrapper">
          <span class="text-truncate">Text in column 1</span>
        </v-col>
        <v-col class="dbg-wrapper">
          <span class="text-truncate">Long_text_in column 2</span>
        </v-col>
      </v-row>

      <v-row class="dbg-wrapper">
        <v-col class="dbg-wrapper">
          <span class="text-truncate">Col 1 of 3</span>
        </v-col>
        <v-col class="dbg-wrapper">
          <span class="text-truncate">Col 2 of 3</span>
        </v-col>
        <v-col class="dbg-wrapper">
          <span class="text-truncate">Col 3 of 3</span>
        </v-col>
      </v-row>
    </v-container>

    <v-sheet class="my-sheet" elevation="1">
      Column width can be set according to screen. Below up to size sm (< 600px) the column is 12 (takes up 100%) of parent.
        When the size of screen is bigger than sm (600px or bigger) then it is 4 (30% of the parent) and offset from left is 4
        making it centered.
        </v-sheet>

        <v-container fluid pa-0>
        <v-row no-gutters>
          <v-col sm="4" offset-sm="4">
            <v-btn>BUTTON</v-btn>
          </v-col>
        </v-row>
        </v-container>

        <v-sheet class="my-sheet" elevation="1">
          Column are build upon flexbox and we can apply many of the flexpox properties. For example:
          &lt;v-row justify="space-between"> makes contaning column to be apart from each other on each side.
        </v-sheet>

        <v-container fluid pa-0>
          <v-row no-gutters>
            <v-col cols="4" offset="8">
              <v-btn>BUTTON</v-btn>
            </v-col>
          </v-row>
        </v-container>

        <v-container fluid pa-0>
          <v-row no-gutters justify="end">
            <v-btn>BUTTON</v-btn>
          </v-row>
        </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Name',
  props: {
    x: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      y: 'name'
    }
  },
  computed: {
    ...mapGetters({
      x: 'filename/statename'
    }),
    y() {
      return this.x
    }
  }
}
</script>

<style lang="postcss" scoped>
.content-wrapper {
  border: 1px solid black;
}

.my-sheet {
  background-color: white;
  margin: 10px;
  padding: 0 5px;
}

/* FOR DEBUGING AND VISUALIZATION */
.container {
  background: red;
}

.row {
  background: yellow;
}
.col {
  background: lightgray;
}

.dbg-container {
  border: 1px dotted gray;
  margin-top: 5px;
  margin-bottom: 5px;
}

.dbg-wrapper {
  border: 1px dotted gray;
  margin: 3px;
}
</style>
