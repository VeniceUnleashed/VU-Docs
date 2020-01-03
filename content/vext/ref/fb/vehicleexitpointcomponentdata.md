---
title: VehicleExitPointComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleExitPointComponentData()                                                          | Create a new instance of this container type.                                                                                                     |
| VehicleExitPointComponentData(VehicleExitPointComponentData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| VehicleExitPointComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata/).                      |
| VehicleExitPointComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata/).                    |
| VehicleExitPointComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata/).              |
| VehicleExitPointComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata/). |

## Properties

| Name                   | Type                              | Description |
| ---------------------- | --------------------------------- | ----------- |
| impulse                | [Vec3](/vext/ref/shared/class/vec3) |             |
| terrainHeight          | number                            |             |
| ordinal                | number                            |             |
| velocity               | number                            |             |
| inheritCameraDirection | bool                              |             |
| checkForVehicleOverrun | bool                              |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
