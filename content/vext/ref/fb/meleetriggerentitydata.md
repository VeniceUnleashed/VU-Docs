---
title: MeleeTriggerEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| MeleeTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| MeleeTriggerEntityData(MeleeTriggerEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| MeleeTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [MeleeTriggerEntityData](MeleeTriggerEntityData).                            |
| MeleeTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [MeleeTriggerEntityData](MeleeTriggerEntityData).                    |
| MeleeTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MeleeTriggerEntityData](MeleeTriggerEntityData).              |
| MeleeTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeleeTriggerEntityData](MeleeTriggerEntityData). |

## Properties

| Name             | Type                                                    | Description |
| ---------------- | ------------------------------------------------------- | ----------- |
| connectTransform | [LinearTransform](/vext/ref/shared/class/LinearTransform) |             |
| meleeType        | [AntEnumeration](AntEnumeration)                        |             |
| meleeEnabled     | bool                                                    |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MeleeTriggerEntityData](MeleeTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeleeTriggerEntityData](MeleeTriggerEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
