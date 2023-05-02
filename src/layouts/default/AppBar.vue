<template>
  <div>
 
     <v-toolbar color="primary" density="compact">
 
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
       <v-checkbox label="Availability"></v-checkbox>
       <v-btn >
         Search
       </v-btn>
 </v-toolbar>
 
  </div>
 
  
   
 </template>