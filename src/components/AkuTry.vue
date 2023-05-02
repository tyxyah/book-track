<template>
 <div>

    <v-toolbar color="primary">


      <v-toolbar-title>BookTrack</v-toolbar-title>
     
      <v-text-field
        :loading="loading"
        density="compact"
        variant="solo"
        label="Search Book"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
     
      <v-toolbar-title>BookTrack</v-toolbar-title>
   
</v-toolbar>

 </div>
  
</template>