---
title: VehicleParachuteComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleParachuteComponentData()                                                          | Create a new instance of this container type.                                                                                                     |
| VehicleParachuteComponentData(VehicleParachuteComponentData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| VehicleParachuteComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [VehicleParachuteComponentData](/vext/ref/fb/vehicleparachutecomponentdata/).                      |
| VehicleParachuteComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VehicleParachuteComponentData](/vext/ref/fb/vehicleparachutecomponentdata/).                    |
| VehicleParachuteComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VehicleParachuteComponentData](/vext/ref/fb/vehicleparachutecomponentdata/).              |
| VehicleParachuteComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleParachuteComponentData](/vext/ref/fb/vehicleparachutecomponentdata/). |

## Properties

| Name                    | Type                                               | Description |
| ----------------------- | -------------------------------------------------- | ----------- |
| binding                 | [VehicleParachuteBinding](/vext/ref/fb/vehicleparachutebinding/) |             |
| undeployTime            | number                                             |             |
| timeInvisibleAfterSpawn | number                                             |             |
| vehicleType             | number                                             |             |
| dropParachuteOnUndeploy | bool                                               |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleParachuteComponentData](/vext/ref/fb/vehicleparachutecomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleParachuteComponentData](/vext/ref/fb/vehicleparachutecomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
