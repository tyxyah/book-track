<template>
 
 
     <v-toolbar color="red" density="compact">
 
       
 
       
      <v-toolbar-title>BookTrack</v-toolbar-title>
      


       <v-spacer></v-spacer>
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
       <v-divider
      class="ms-3"
      inset
      vertical
    ></v-divider>
       <v-checkbox label="Availability"></v-checkbox>
       <v-divider
      class="ms-3"
      inset
      vertical
    ></v-divider>
    <v-btn>Search</v-btn>
    
 </v-toolbar>

  
  
  
   
 </template>