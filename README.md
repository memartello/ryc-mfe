This is an example of a Microfront architecture with a Core project and a Remote Auth project boostraped with vite.

To running the remote Auth MFE:

1. go to ryc-auth
2. npm i
3. npm build & npm serve

To running the core MFE that wraps all:

1. go to ryc-core
2. npm i
3. npm build & npm preview

In PORT 5001 you will have your core application running and holding the remote Auth.

In PORT 5002 you will have your remote application running.

If you do changes on your remote application there is no need to stop the core aplication.
Also there are sharing state with jotai library

As we using Typescript we need the definition of the modules shared from the remotes apps in tsremote_declarations.ts
