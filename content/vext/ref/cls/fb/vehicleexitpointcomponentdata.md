---
title: VehicleExitPointComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleExitPointComponentData()                                                          | Create a new instance of this container type.                                                                                                     |
| VehicleExitPointComponentData(VehicleExitPointComponentData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| VehicleExitPointComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [VehicleExitPointComponentData](VehicleExitPointComponentData).                      |
| VehicleExitPointComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VehicleExitPointComponentData](VehicleExitPointComponentData).                    |
| VehicleExitPointComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VehicleExitPointComponentData](VehicleExitPointComponentData).              |
| VehicleExitPointComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VehicleExitPointComponentData](VehicleExitPointComponentData). |

## Properties

| Name                   | Type                              | Description |
| ---------------------- | --------------------------------- | ----------- |
| impulse                | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| terrainHeight          | number                            |             |
| ordinal                | number                            |             |
| velocity               | number                            |             |
| inheritCameraDirection | bool                              |             |
| checkForVehicleOverrun | bool                              |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleExitPointComponentData](VehicleExitPointComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VehicleExitPointComponentData](VehicleExitPointComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
