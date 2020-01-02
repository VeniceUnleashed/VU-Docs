---
title: SoldierParachuteComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierParachuteComponentData()                                                          | Create a new instance of this container type.                                                                                                     |
| SoldierParachuteComponentData(SoldierParachuteComponentData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| SoldierParachuteComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SoldierParachuteComponentData](SoldierParachuteComponentData).                      |
| SoldierParachuteComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoldierParachuteComponentData](SoldierParachuteComponentData).                    |
| SoldierParachuteComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierParachuteComponentData](SoldierParachuteComponentData).              |
| SoldierParachuteComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierParachuteComponentData](SoldierParachuteComponentData). |

## Properties

| Name              | Type                                               | Description |
| ----------------- | -------------------------------------------------- | ----------- |
| binding           | [SoldierParachuteBinding](SoldierParachuteBinding) |             |
| aimingConstraints | [AimingConstraintsData](AimingConstraintsData)     |             |
| undeployTime      | number                                             |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierParachuteComponentData](SoldierParachuteComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierParachuteComponentData](SoldierParachuteComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
