---
title: SoldierBodyComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierBodyComponentData()                                                          | Create a new instance of this container type.                                                                                           |
| SoldierBodyComponentData(SoldierBodyComponentData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SoldierBodyComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SoldierBodyComponentData](SoldierBodyComponentData).                      |
| SoldierBodyComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoldierBodyComponentData](SoldierBodyComponentData).                    |
| SoldierBodyComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierBodyComponentData](SoldierBodyComponentData).              |
| SoldierBodyComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierBodyComponentData](SoldierBodyComponentData). |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| sprintMultiplier     | number |             |
| overrideGravityValue | number |             |
| overrideVelocityY    | number |             |
| overrideVelocity     | bool   |             |
| overrideGravity      | bool   |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierBodyComponentData](SoldierBodyComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierBodyComponentData](SoldierBodyComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
