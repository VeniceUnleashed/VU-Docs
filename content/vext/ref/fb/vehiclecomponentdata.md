---
title: VehicleComponentData
---
### Base Classes

[ChassisComponentData](/vext/ref/fb/chassiscomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VehicleComponentData()                                                          | Create a new instance of this container type.                                                                                   |
| VehicleComponentData(VehicleComponentData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VehicleComponentData([ChassisComponentData](/vext/ref/fb/chassiscomponentdata/) other)        | Upcast an instance of type [ChassisComponentData](/vext/ref/fb/chassiscomponentdata/) to [VehicleComponentData](/vext/ref/fb/vehiclecomponentdata/).        |
| VehicleComponentData([PartComponentData](/vext/ref/fb/partcomponentdata/) other)              | Upcast an instance of type [PartComponentData](/vext/ref/fb/partcomponentdata/) to [VehicleComponentData](/vext/ref/fb/vehiclecomponentdata/).              |
| VehicleComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [VehicleComponentData](/vext/ref/fb/vehiclecomponentdata/).                      |
| VehicleComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VehicleComponentData](/vext/ref/fb/vehiclecomponentdata/).                    |
| VehicleComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VehicleComponentData](/vext/ref/fb/vehiclecomponentdata/).              |
| VehicleComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleComponentData](/vext/ref/fb/vehiclecomponentdata/). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleComponentData](/vext/ref/fb/vehiclecomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleComponentData](/vext/ref/fb/vehiclecomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
