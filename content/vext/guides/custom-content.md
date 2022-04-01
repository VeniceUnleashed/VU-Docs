---
title: Creating and using custom content
description: Details on how to create custom content using Rime and use it in VU using VeniceEXT.
readingTime: true
weight: 12
---

## **WARNING**

**Custom content support is still experimental and the tooling is incomplete.**

As we explained in the [Frostbite data basics](/vext/guides/data) guide, game content exists within Frostbite superbundle files. In this guide, we'll go through using Rime to extract files from superbundles, modify them, and create new superbundles from our modified files. We'll then touch briefly on loading our custom superbundles via VeniceEXT.

## Downloading Rime

The first step in the process involves downloading Rime. Rime is currently a work-in-progress, so only a command-line version of it is provided for experimentation purposes. You can download the latest pre-release version from below:

[Download Rime Pre-release](https://i.nofate.me/FG0DnzclBlppi6Y.zip)

After you've downloaded it, make sure you extract all the files in an easy to reach location and from it run `RimeREPL.exe`. `RimeREPL` provides an interactive command-line interface to various Rime functions, and we'll be using it to perform the various tasks outlined in this guide.

## Extracting game content

### Mounting the game

Before we can start extracting content from the game, we must mount it. Mounting is the process of telling Rime some basic information about our game, and letting it discover all of the content that's available to it.

To mount your Battlefield 3 installation, type the following command in the Rime REPL (replacing the path with wherever you have BF3 installed locally), and then hit enter:

> mount_game C:\Games\BF3 Frostbite2_0 true

The `true` here signifies that we want Rime to automatically mount all the bundles inside all the superbundles it discovers for this game. If we didn't want this to happen automatically, we could mount bundles individually after switching to the game context, as explained below.

After the game has been mounted, you should get a message like `Game successfully mounted with id '1'`. Keep note of the id as we'll need it in the next step. 

### Switching to the correct game context

Since Rime supports loading multiple games at once, we must switch to the correct game context before we can start playing with its data. To do so, we can use the `select_game` command:

> select_game 1

Note that `1` here corresponds to the id that we got in the previous step.

### Extracting data

#### Dumping textures

Using the `dump_texture` command, we can dump a Frostbite texture to a DDS file for us to then edit. We just need to give the command the texture that we want to dump and where it should put the converted DDS file, and Rime will do the rest for us. For example:

> dump_texture weapons/xp4_crossbow_prototype/xp4_crossbow_bow_d C:/XP4_Crossbow_bow_D.dds

Here, we dump the `weapons/xp4_crossbow_prototype/xp4_crossbow_bow_d` texture resource to a DDS file at `C:/XP4_Crossbow_bow_D.dds`. This specific resource is the diffuse texture for the crossbow, and the way we found it was by going through the EBX data and looking for the corresponding [TextureAsset](https://github.com/EmulatorNexus/Venice-EBX/blob/master/Weapons/XP4_Crossbow_Prototype/XP4_Crossbow_bow_D.txt). We write its name as lower-case since all texture resources are lowercase.

Keep in mind that Rime doesn't support all texture formats at the writing of this guide, so you might get errors while trying to extract some of them.

#### Dumping partitions

Using the `dump_partition_json` command, we can dump a Frostbite partition (EBX) to its JSON representation, allowing us to edit it and convert it back to its native partition format (which we'll see below). For example:

> dump_partition_json Weapons/XP4_Crossbow_Prototype/XP4_Crossbow_bow_D C:/XP4_Crossbow_bow_D.json Indented

This works in the same way as above, dumping the corresponding partition to a JSON file in our C drive. The `Indended` at the end tells Rime to produce a "pretty-printed" JSON file, which is more human readable. We can omit this if we don't want that behavior.

## Creating game content

Now that we've seen how to extract game content, let's create our own. For the purposes of this guide we'll do two things:

1. We'll modify the crossbow texture we dumped and re-bundle it, replacing the existing one.
2. We'll create a new partition and a new instance based on the one we dumped. We won't use this for anything, but it should give you an idea of how to do this in general.

### Creating a new superbundle

Back at the Rime REPL, we want to start building a new superbundle. To do this, we must first exit the game context by typing `exit` and pressing enter. From there, we can use the `build_sb` command to start creating a new superbundle:

> build_sb Win32/My/Amazing/Superbundle Frostbite2_0 C:/SbOutput

This will put us into the context of building a new superbundle for the Frostbite 2.0 engine named `Win32/My/Amazing/Superbundle`, and once it's built it will get placed in the `C:/SbOutput` folder.

**NOTE:** For superbundles to work correctly with VU, their name must **ALWAYS** start with `Win32/`.

### Adding a new bundle to the superbundle

As we've talked about before, superbundles contain two things: chunks and bundles. Using the REPL, we can add both (you can use the `help` command to see how that works), but for the purposes of this guide we'll only create a new bundle.

To do so, we can use the `build_bundle` command as seen below:

> build_bundle Win32/My/Amazing/Bundle

This will put us into the context of building a new bundle with the name `Win32/My/Amazing/Bundle` which will be placed inside the current superbundle.

**NOTE:** Similar to superbundles, for bundles to work correctly with VU, their name must **ALWAYS** start with `Win32/`.

### Modifying and adding our texture to the bundle

Now let's modify the texture. To do that you can use any tool that can edit DDS files, but we generally recommend using Photoshop with the [Nvidia Texture Tools](https://developer.nvidia.com/nvidia-texture-tools-exporter) plugin. Keep in mind that for weapon diffuse maps the selected output format doesn't matter, but for other types of textures you might want to make sure that the format of the DDS file you create matches the one dumped from the game.

After you've made any changes you want to the texture, save it again as DDS to a folder of your choice. For this example we'll assume you saved it to `C:\CustomCrossbowTexture.dds`.

We'll now have Rime convert this texture back to an engine-native format and add it to our bundle by using the `add_dds_texture` command:

> add_dds_texture weapons/xp4_crossbow_prototype/xp4_crossbow_bow_d C:\CustomCrossbowTexture.dds

Here, we give it the same name as the original texture resource, since we want our custom texture to override it.

### Adding a new partition to the bundle

To add a new partition, we can write it in its JSON representation and have Rime convert it back to its engine-native format for us. For this example, we'll just take the partition we dumped before and change its name and guids (since each partition / instance must have different guids):

```json
{
  "Name": "My/Amazing/Partition",
  "PartitionGuid": "c8b8c7ac-7e47-4f7d-94e4-9f3e72f37553",
  "PrimaryInstanceGuid": "ba89b889-ad07-4f58-b5c6-fde0cd6675d5",
  "Instances": {
    "ba89b889-ad07-4f58-b5c6-fde0cd6675d5": {
      "$type": "TextureAsset",
      "Name": "Weapons/XP4_Crossbow_Prototype/XP4_Crossbow_bow_D"
    }
  }
}
```

We will then have Rime add this to the bundle using the `add_json_partition` command:

> add_json_partition My/Amazing/Partition C:\MyPartition.json

### Building everything

Now that we've added all that we wanted to our bundle it's time to build it by using the `build` command:

> build

This will build the bundle and add it to our superbundle. We can then build the superbundle and store it in a file by using the `build` command again:

> build

You should now have some files generated in your `C:/SbOutput` folder, that are ready to use with VU.

## Using custom content via VeniceEXT

Now that we've created our custom content it's time to use it in-game. To do that we need to use VeniceEXT. First, we'll create a mod as per usual, but inside its `mod.json` file we'll put the following:

```json
{
  ...,
  "Superbundles": [
    "Win32/My/Amazing/Superbundle"
  ]
}
```

Then, inside the mod folder we'll create a new folder called `sb` and in there we'll paste the files we generated using Rime previously. At the end, the file structure should look like this:

```
/mod.json
/sb/Win32/My/Amazing/Superbundle.sb
/sb/Win32/My/Amazing/Superbundle.toc
```

Then, in our shared script we'll add the following code:

```lua
Events:Subscribe('Level:LoadResources', function()
	ResourceManager:MountSuperBundle('My/Amazing/Superbundle')
end)

Hooks:Install('ResourceManager:LoadBundles', 100, function(hook, bundles, compartment)
	if #bundles == 1 and bundles[1] == SharedUtils:GetLevelName() then
		bundles = {
			'My/Amazing/Bundle',
			bundles[1],
		}

		hook:Pass(bundles, compartment)
	end
end)

ResourceManager:RegisterInstanceLoadHandler(Guid('c8b8c7ac-7e47-4f7d-94e4-9f3e72f37553'), Guid('ba89b889-ad07-4f58-b5c6-fde0cd6675d5'), function(instance)
  print('Our custom instance:')
  print(instance)
end)
```

This will do a few things:

1. When the game is loading its superbundles, we will make it also load our custom one.
2. When the game is loading the main level bundle, we will make it also load our custom one before it. Loading our custom bundle before the main level one is important if we want to override existing resources. Whatever gets loaded first takes priority.
3. When the game loads our custom partition and instance, our callback will get called and our instance will be printed to the console.

We then run our mod as per usual on the server and join. The client will automatically download the custom superbundle from it.