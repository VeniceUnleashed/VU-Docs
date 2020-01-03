---
title: VehicleParachuteComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleParachuteComponentData()                                                          | Create a new instance of this container type.                                                                                                     |
| VehicleParachuteComponentData(VehicleParachuteComponentData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| VehicleParachuteComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [VehicleParachuteComponentData](VehicleParachuteComponentData).                      |
| VehicleParachuteComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VehicleParachuteComponentData](VehicleParachuteComponentData).                    |
| VehicleParachuteComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VehicleParachuteComponentData](VehicleParachuteComponentData).              |
| VehicleParachuteComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleParachuteComponentData](VehicleParachuteComponentData). |

## Properties

| Name                    | Type                                               | Description |
| ----------------------- | -------------------------------------------------- | ----------- |
| binding                 | [VehicleParachuteBinding](VehicleParachuteBinding) |             |
| undeployTime            | number                                             |             |
| timeInvisibleAfterSpawn | number                                             |             |
| vehicleType             | number                                             |             |
| dropParachuteOnUndeploy | bool                                               |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleParachuteComponentData](VehicleParachuteComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleParachuteComponentData](VehicleParachuteComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
