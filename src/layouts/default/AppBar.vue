<template>
  <div>
 
     <v-toolbar color="primary" density="compact">
 
       <v-toolbar-title>BookTrack</v-toolbar-title>
 
       
       <v-text-field
        
         density="compact"
         variant="solo"
         label="Search Book"
         append-inner-icon="mdi-magnify"
         single-line
         hide-details
       ></v-text-field>
       <v-checkbox label="Availability"></v-checkbox>
       <v-btn >
         Search
       </v-btn>
 </v-toolbar>
 
  </div>
 
  
   
 </template>