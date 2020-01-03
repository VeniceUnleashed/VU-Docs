---
title: Game modifications
---
One of the first things you will want to do is modify game data. Frostbite data is structured as EBX so you will need an EBX dump to look through it. In this example we are using a dump that has dashed GUIDs.

In this mod we are going to change the maximum health that all players have. As searching for `health` inside the dump folder will bring a lot of results we look for files that contain data of soldiers first. The folder `Characters/Soldiers` looks like it's what we needed, as there are different files for different soldiers. The soldier we currently care for is `MpSoldier`, as we want to make this modification for multiplayer. We open this file and look for health. One of the results is `maxHealth`, looks like we found it.

We need to find this instance when the game is loading to modify its `maxHealth` field. To archieve this first we look at the object that has this field, which is `SoldierEntityData`. Its GUID is `A9FFE6B4-257F-4FE8-A950-B323B50D2112`.

First, we need to subscribe to `Partition:Loaded` event.

As these changes have to be done on the server and all clients we will write the code in `ext/shared`.

```lua
function OnPartitionLoaded(partition)
    if partition == nil then
        return
    end

    for _, instance in pairs(partition.instances) do
        -- do something
    end
end

Events:Subscribe('Partition:Loaded', OnPartitionLoaded)
```

We are looping through all the instances in each partition that is loaded. Now we need to compare each instance GUID with the one we are interested in. In order to do that we have to access the instance GUID with the `.instanceGuid` field, as well as creating a GUID object with the string we saved:

``` lua
for _, instance in pairs(partition.instances) do
    if instance.instanceGuid == Guid("A9FFE6B4-257F-4FE8-A950-B323B50D2112", "D") then
        
    end
end
```

The "D" parameter in the GUID constructor means that it's dashed.

Great\! We found the instance, now we just need to modify it. By default all instances are read only (we can check with the `.isReadOnly` field) but there are a couple ways to make them writable. But first, let's cast the instance so we can access its members.

``` lua
for _, instance in pairs(partition.instances) do
    if instance.instanceGuid == Guid("A9FFE6B4-257F-4FE8-A950-B323B50D2112", "D") then
        print(instance.isReadOnly) -- true

        local soldierEntityData = SoldierEntityData(instance)
        
        print(soldierEntityData.maxHealth) -- 100
    end
end
```

This will print on the console the default maxHealth value, 100. But now let's talk about how to make it writable. The fastest and easiest way is to use `MakeWritable` method on it, but its not the safest way and can cause problems in some cases. To do it right we have to clone the instance and replace all references of the orginal instance with the clone. Now we can successfully modify maxHealth.

``` lua
function OnPartitionLoaded(partition)
    if partition == nil then
        return
    end

    for _, instance in pairs(partition.instances) do
        if instance.instanceGuid == Guid("A9FFE6B4-257F-4FE8-A950-B323B50D2112", "D") then
            local soldierEntityData = SoldierEntityData(instance)
            
            -- soldierEntityData:MakeWritable()

            local clone = soldierEntityData:Clone(soldierEntityData.instanceGuid)

            print(clone.maxHealth) -- 100
            clone.maxHealth = 1337
            print(clone.maxHealth) -- 1337

            partition:ReplaceInstance(instance, clone, true)
        end
    end
end

Events:Subscribe('Partition:Loaded', OnPartitionLoaded)
```

Note that we passed the original instance GUID to the clone method. This way the clone will have the same GUID in case it's referenced somewhere. ReplaceInstance replaces references to that instance, but not references to the GUID it has.

And that's it, we've created our first mod that modifies game data.
