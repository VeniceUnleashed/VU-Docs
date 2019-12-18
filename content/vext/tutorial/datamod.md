---
title: Modifying Game Data in VeniceEXT
---
In this tutorial we'll go through a very basic modification on game data. More specifically, we will be modifying the Visual Environment of the BF3 map "Ziba Tower" to give everything a green/purple hue.

## Basics

## Locating Instances

## Replacing an Instance

## Modifying an Instance

## Afterthoughts

## Complete Script

``` lua
-- We call this function when we find the instance
-- we want to modify.
function OnCC(partition, instance)
  -- Cast to the real type.
  local realInstance = ColorCorrectionComponentData(instance)

  -- If it's already editable it most likely means it's the 
  -- cloned instance we create below. Keep in mind that that
  -- there's a chance that other extensions have already cloned
  -- and replaced this instance, in which case it would NOT
  -- be read-only. If you want to keep track of instances 
  -- you have modified you will have to do it manually.
  if not realInstance.isReadOnly then
    return
  end

  -- If the instance is read only that means that it has
  -- come directly from game data. Let's clone it.

  -- The parameter we pass in there is the GUID of the
  -- original instance. All instances coming from game data
  -- have a unique identifier in the form of a GUID. By 
  -- passing the GUID in we instruct VeniceEXT to register
  -- this new clone with the same GUID as the original 
  -- instance, effectively replacing it for anyone looking
  -- for this instance by its GUID at a later time.
  local clone = realInstance:Clone(realInstance.instanceGuid)

  -- Keep in mind that clones are simply shallow copies.
  -- That is essentially the equivalent of assigning all
  -- fields of one instance to another. Any fields that 
  -- reference other instances will still point to the 
  -- same thing.

  -- Now we need to instruct VeniceEXT to replace all 
  -- references to the original instance with our new 
  -- cloned instance, which we will then modify.
  partition:ReplaceInstance(instance, clone, true)
  
  -- The "true" here is optional (and default) and tells 
  -- VeniceEXT to also go find and replace all references
  -- to the original instance with the new clone. You can
  -- try changing this to false and seeing what line 81
  -- ends up printing out.

  -- In cases where you need to replace all references to 
  -- something on runtime you can also do the following:
  -- fromInstance:ReplaceReferences(toInstance)

  -- Print the original hue value.
  print('Hue:')
  print(realInstance.hue)

  -- Change the value of our clone and print it.
  clone.hue = 86.0
  print('Changed Hue:')
  print(clone.hue)

  -- One might be tempted to skip all the work above and 
  -- do something like:
  -- realInstance.hue = 86.0
  -- However, this will have no effect, as the instance
  -- you would be trying to modify is read-only.
end

function OnVE(partition, instance)
  -- We don't need to modify in this case so we just upcast it.
  local data = VisualEnvironmentEntityData(instance)

  -- Get the color correction data.
  for _, component in ipairs(data.components) do
    if component.typeName == "ColorCorrectionComponentData" then
      -- Again, we don't need to modify so just upcast and print
      -- all the necessary info.
      local ccData = ColorCorrectionComponentData(component)

      -- We print out the hue here to make sure that references 
      -- to the original color correction instance have been
      -- properly replaced.
      print('Found hue through VE:')
      print(ccData.hue)
    end
  end
end

-- This is our partition loading handler. We pass this
-- function to VeniceEXT and tell it to call it whenever
-- a specific event happens. Look at the event subscription
-- call below this function.
function OnPartitionLoaded(partition)
  -- The provided partition roughly represents a game data
  -- file (ebx). Each partition has a set of instances which
  -- can be accessed as seen below.
  local instances = partition.instances

  -- We are looking for a couple of very specific instances.
  -- In Frostbite, all game-bound instances have a GUID, so
  -- we can use that fact to our advantage and locate the
  -- ones we want. Partitions also have GUIDs, and one could
  -- check them with the partition.guid property.
  for _, instance in ipairs(instances) do
    if instance.instanceGuid == Guid('191514B3-E916-47B5-BD8C-206694EA56D8', 'D') then
      OnCC(partition, instance)
    elseif instance.instanceGuid == Guid('1DAC7407-208C-42B5-BBFF-1B39290B5123', 'D') then
      OnVE(partition, instance)
    end
  end
end

-- We register a listener for the Partition:Loaded event.
-- When the engine loads a partition (ebx), VeniceEXT will
-- call this function, giving you a chance to inspect its
-- contents and even edit them.
Events:Subscribe('Partition:Loaded', OnPartitionLoaded)
```
