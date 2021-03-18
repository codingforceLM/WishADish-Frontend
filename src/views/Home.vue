<template>
  <div>

    <Split style="height: 800px;" :gutterSize="0">
      <SplitArea :size="4"/>
      <SplitArea style="border-style: solid" :size="44">
        <h1>Geile Gerichte</h1>
        <p>geiler Texyt</p>
        <br><br>
        <Card/>
        <Card/>
        <Card/>
      </SplitArea>
      <SplitArea :size="4"/>
      <SplitArea style="border-style: solid" :size="44">
        <h1>Geile Gerichte</h1>
        <p>geiler Texyt</p>
        <br><br>
        <Card/>
        <Card/>
        <Card/>
      </SplitArea>
      <SplitArea :size="4"/>
    </Split>
  </div>
  <!--- <div class="home">
     <HelloWorld msg="Welcome to Your Vue.js App"/>
   </div> -->
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Card from "@/components/Card";

export default {
  name: 'Home',
  components: {
    Card,
    //  HelloWorld
  }
}
</script>
