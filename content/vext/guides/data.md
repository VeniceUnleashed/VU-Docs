---
title: Frostbite data basics
description: Details about how the Frostbite engine stores its data and metadata that controls how the game works and the game levels are set up.
readingTime: true
weight: 6
---

Every game needs some way to represent and store the data that it uses to create its worlds. Such data could represent or describe a variety of things, like how weapons work or what props should be placed within a specific map and where. In this guide we'll go into a bit more detail on how Frostbite represents such data and the terminology you'll need to know in order to later be able to use VeniceEXT to modify said data. The data concepts that we will cover are the so called Superbundles, the Bundles, the Partitions, and the Instances.

## Superbundles

Superbundles are the main containers of data, and exist as files within your game installation. You can find them by going inside your BF3 directory and looking for files ending with the `.sb` extension. These files are split based on the context they'll be used in. For example, there is one Superbundle for each level in the game (eg. the `Data\Win32\Levels\MP_Subway\MP_Subway.sb` Superbundle contains data for the `Operation Metro` game level), and there are other Superbundles that are shared in different contexts (eg. the `Data\Win32\MpChunks.sb` Superbundle has data that's shared between all multiplayer levels and the `Data\Win32\Weapons.sb` one has weapon data that's shared by all levels).

For example, if we're trying to load the `Operation Metro` level, the engine will mount (load) the following Superbundles: 

- `Data\Win32\Chunks0.sb`: Shared data between all levels. 
- `Data\Win32\Chunks1.sb`: Shared data between all levels. 
- `Data\Win32\Chunks2.sb`: Shared data between all levels. 
- `Data\Win32\SpChunks.sb`: Shared data for all singleplayer and multiplayer levels.
- `Data\Win32\MpChunks.sb`: Shared data for all multiplayer levels.
- `Data\Win32\UI.sb`: UI data.
- `Data\Win32\Weapons.sb`: Weapon data (models, sounds).
- `Data\Win32\Loc\<lang>.sb`: Localization data for your selected game language (where `<lang>` would be the language code like `en`).
- `Data\Win32\Levels\MP_Subway\MP_Subway.sb`: The level data.

This will make the data they contain discoverable and usable by the engine. 

Each Superbundle contains two different types of data (but not necessarily both):

- **Chunks**: These can be thought as files that contain raw data for various game assets, like textures, models, sounds etc. We won't be dealing with chunks in this guide.
- **Bundles**: These are another type of data container which we'll explain below.

## Bundles

Now that we've explained what Superbundles are, let's look at the Bundles that are contained within them. Let's look at the example of the `Operation Metro` Superbundle we mentioned below. That Superbundle contains all the data for the level and its various gamemodes. However, when we want to load this level into our game we're almost always going to be playing a very specific gamemode. As such, it would be wasteful to load all of the data of all of the different gamemodes. For example, if we're playing Team Deathmatch, it wouldn't make sense to load the Conquest flags, their models, and the metadata that accompanies them (eg. their location on the map). That's where Bundles come in.

Bundles are a way of splitting game data into even more specific categories so the engine can load them based on what's needed. Each Bundle is identified by its name, which must be unique across the entirety of the game data. For example, the `Operation Metro` Superbundle (`Data\Win32\Levels\MP_Subway\MP_Subway.sb`) contains the following bundles (and a bunch more):

- `Levels/MP_Subway/MP_Subway`: This is the main level Bundle which contains level data that's shared across all gamemodes, like the terrain, common props, etc.
- `Levels/MP_Subway/TeamDeathMatch`: This Bundle contains data specific to the Team Deathmatch gamemode, like the player spawns, the combat area etc.
- `Levels/MP_Subway/Rush`: This Bundle contains data specific to the Rush gamemode, like locations of MCOM stations, the different combat areas, and the logic of moving from one area to the next.

When the level is loaded, the game will first load the common `Levels/MP_Subway/MP_Subway` Bundle and then, based on the gamemode that's currently active, it will load one of the gamemode-specific Bundles, like `Levels/MP_Subway/TeamDeathMatch`.

Each bundle contains the following different types of data (but not necessarily all of them):

- **Chunks**: Like Superbundle Chunks, but these are context specific. For example, it could be model data for a model that's only used in a specific gamemode, or higher resolution terrain for the parts of the map that are only relevant for a specific gamemode.
- **Resources**: These are files that describe different types of game assets. For example, there are texture resources that describe the texture (eg. its resolution and format) and then point to Chunks that contain the raw texture data. We won't be dealing with Resources in this guide.
- **Partitions**: These are files that contain metadata about the game's different systems, from things like the different weapons and their attribute (eg. how many bullets they have) to what different props are comprised of and where they should be placed on the map. We'll look at these into more detail below.

You can find a full listing of Superbundles and all of their contained Bundles [here](/vext/bundles/).

## Partitions

Partitions are what contains all the game's metadata and are what's exposed to VeniceEXT for us to modify. Partitions are also commonly referred to as EBX, and these two terms may be used interchangeably sometimes, but EBX actually refers to the way they are serialized to binary data (EBX stands for something like Enhanced dataBase XML according to [BionicBeagle](https://twitter.com/bionicbeagle/status/676667384137195520)). With that being said, whenever you hear someone talk about EBX they're most likely talking about Partitions.

Each Partition is identified by its name (which is similar to a file path) and a Guid. Inside each Partition are Instances, which we'll explain in more detail [below](#instances). Every Partition usually contains metadata about a specific thing inside the game. For example, the `Weapons/AK74M/AK74` Partition describes the `AK74` weapon and its various properties, like what model it uses, what attachments it has, what kind of bullets it fires, how much primary and reserve ammo it has, the sound it makes, etc. 

Since Partitions are not in a human-readable format by default, we have a text dump of all Partitions that exist in Battlefield 3 that's available as reference for modders [here](https://github.com/Powback/Venice-EBX) (you can see the data for the `AK74` Partition we mentioned before [here](https://github.com/Powback/Venice-EBX/blob/master/Weapons/AK74M/AK74.txt) for example). We'll provide some more details on how the metadata hierarchy is structured and where to look for things down below.

## Instances

Each Partition contains one or more Instances. In the [Introduction to VeniceEXT concepts](/vext/guides/concepts/) guide, we briefly touched upon [Frostbite types](/vext/guides/concepts/#frostbite-types). As we mentioned there, these types are used to represent game metadata. This metadata is what Instances are. Each Instance is of a specific Frostbite Instance type, and contains data for that type. For example, the [SoldierEntityData](https://github.com/Powback/Venice-EBX/blob/master/Characters/Soldiers/MpSoldier.txt#L5480) Instance for [MpSoldier](https://github.com/Powback/Venice-EBX/blob/master/Characters/Soldiers/MpSoldier.txt), the default multiplayer soldier which is being used by the engine when a player spawns in the level and their soldier is created, has a [MaxHealth](https://github.com/Powback/Venice-EBX/blob/master/Characters/Soldiers/MpSoldier.txt#L5707) value of `100.0`. Changing that value via VeniceEXT (we'll explain how to do that in the [Introduction to data modifications](/vext/guides/datamod) guide), will also change the maximum health of all players.

Similarly to Partitions, every Instance is identified by a Guid. In the [MpSoldier](https://github.com/Powback/Venice-EBX/blob/master/Characters/Soldiers/MpSoldier.txt) Partition we mentioned above, the [SoldierEntityData](https://github.com/Powback/Venice-EBX/blob/master/Characters/Soldiers/MpSoldier.txt#L5480) Instance is identified by the Guid `A9FFE6B4-257F-4FE8-A950-B323B50D2112`. Additionally, every Partition must have a "Primary Instance". Since each Partition usually describes a specific thing or item in the game, its "Primary Instance" will usually be what will be used by other places to utilize said thing. For example, the Primary Instance of the [MpSoldier](https://github.com/Powback/Venice-EBX/blob/master/Characters/Soldiers/MpSoldier.txt) Partition we mentioned above is a [SoldierBlueprint](https://github.com/Powback/Venice-EBX/blob/master/Characters/Soldiers/MpSoldier.txt#L2874) Instance with the Guid `261E43BF-259B-41D2-BF3B-9AE4DDA96AD2`, which contains the various data required to create a soldier, including the [SoldierEntityData](https://github.com/Powback/Venice-EBX/blob/master/Characters/Soldiers/MpSoldier.txt#L5480) we mentioned above. This Instance is then referenced by a few different places, like the [Partition and Instance](https://github.com/Powback/Venice-EBX/blob/master/Gameplay/Teams/Us.txt#L6) that describes the team composition for the US team. With that being said, there's nothing that prevents us from referencing an Instance that's not the Primary one from a different Partition or otherwise.

Instances can either be used directly by the engine for some specific purpose (eg. representing an asset like a texture or model, or controlling specific game settings), or they can be used dynamically by other parts of the engine to perform actions such as creating entities and describing connections between them. For example, when the engine has to create any type of entity, it needs to be provided with an [EntityData](/vext/ref/fb/entitydata/) or [Blueprint](/vext/ref/fb/blueprint/) Instance (or rather, one of its more specific derived types, like the [SoldierEntityData](/vext/ref/fb/soldierentitydata/) and [SoldierBlueprint](/vext/ref/fb/soldierblueprint/) we mentioned above), and by using the type and the data of that Instance it knows what entity to create and how it should make it behave.

## Data layout

Navigating the data dump might seem a bit daunting but it's mostly a matter of knowing what to look for and where to look for it. We'll list some locations of commonly needed data below. You can also use the search bar in the [Venice-EBX](https://github.com/Powback/Venice-EBX) repository to search for specific keywords for the thing you're trying to modify.

| Data folder | Description |
| ----- | --------- |
| [Characters](https://github.com/Powback/Venice-EBX/tree/master/Characters) | Contains the various parts that make up a character, like arm, leg, camos, and head models, along with metadata used to create in-game soldiers (spawned players).
| [Decals](https://github.com/Powback/Venice-EBX/tree/master/Decals) | Describes various decals, like bullet impacts, blood, etc. 
| [FX](https://github.com/Powback/Venice-EBX/tree/master/FX) | Describes various particle effects, like explosions, blood splatters, etc.
| [Gameplay/Kits](https://github.com/Powback/Venice-EBX/tree/master/Gameplay/Kits) | Describes the various kits / classes (eg. Assault, Engineer, etc.) for different gamemodes and the items they have available.
| [Levels](https://github.com/Powback/Venice-EBX/tree/master/Levels) | Contains Partitions that describe all the levels and how they are structured. We'll describe level structure in a bit more detail below.
| [Objects](https://github.com/Powback/Venice-EBX/tree/master/Objects) | Describes various objects / props / models that are used throughout the game.
| [Props](https://github.com/Powback/Venice-EBX/tree/master/Props) | Describes various objects / props / models that are used throughout the game.
| [Vehicles](https://github.com/Powback/Venice-EBX/tree/master/Vehicles) | Contains a folder for every different vehicle in the game, each containing details about how that vehicle is structured, its speed, health states, weapons, etc.
| [Vehicles/common](https://github.com/Powback/Venice-EBX/tree/master/Vehicles/common) | Common parts of different vehicles, like screen overlays, HUD, effects, etc.
| [Vehicles/common/weapondata](https://github.com/Powback/Venice-EBX/tree/master/Vehicles/common/weapondata) | Describes the various weapons that are used by different vehicles.
| [Weapons](https://github.com/Powback/Venice-EBX/tree/master/Weapons) | Contains a folder for every weapon in the game, each containing details about how that weapon works, what sort of ammo it uses and has, the attachments it takes, etc.
| [Weapons/Accessories](https://github.com/Powback/Venice-EBX/tree/master/Weapons/Accessories) | Describes the various attachments that are used by different weapons, like suppressors, sights, etc.
| [Weapons/Common/Bullets](https://github.com/Powback/Venice-EBX/tree/master/Weapons/Common/Bullets) | Describes the different types of ammunition that are available for the weapons to use and their various attributes, like their damage and ballistics.
  
## Level structure

The Partitions and Instances of each level live within folders inside the [Levels](https://github.com/Powback/Venice-EBX/tree/master/Levels) folder. Each level has a main Partition that's usually named after the level itself. For example, the main Partition of `Alborz Mountains` is [Levels/XP3_Alborz/XP3_Alborz](https://github.com/Powback/Venice-EBX/blob/master/Levels/XP3_Alborz/XP3_Alborz.txt). Inside the main level Partition there is a [LevelData](https://github.com/Powback/Venice-EBX/blob/master/Levels/XP3_Alborz/XP3_Alborz.txt#L3084) Instance which contains [all the parts](https://github.com/Powback/Venice-EBX/blob/master/Levels/XP3_Alborz/XP3_Alborz.txt#L4582) that make up the level and some additional metadata (like the [max height a vehicle can fly to](https://github.com/Powback/Venice-EBX/blob/master/Levels/XP3_Alborz/XP3_Alborz.txt#L4643)). Then, each different setup of a level (ie. the way things need to be placed and connected when running in different gamemodes) is referenced as a [SubWorldReference](https://github.com/Powback/Venice-EBX/blob/master/Levels/XP3_Alborz/XP3_Alborz.txt#L16750) which makes the game load a specific bundle when that gamemode is active. That bundle then contains a Partition that's usually named after it (eg. [Levels/XP3_Alborz/CONQUEST](https://github.com/Powback/Venice-EBX/blob/master/Levels/XP3_Alborz/CONQUEST.txt)) and inside it there is a [SubWorldData](https://github.com/Powback/Venice-EBX/blob/master/Levels/XP3_Alborz/CONQUEST.txt#L121) Instance that, similarly to `LevelData`, describes how the level should be set up for this gamemode.