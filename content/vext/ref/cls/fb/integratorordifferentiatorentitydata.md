---
title: IntegratorOrDifferentiatorEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                     | Description                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IntegratorOrDifferentiatorEntityData()                                                          | Create a new instance of this container type.                                                                                                                   |
| IntegratorOrDifferentiatorEntityData(IntegratorOrDifferentiatorEntityData other)                | Create a reference copy of an instance of the same type.                                                                                                        |
| IntegratorOrDifferentiatorEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [IntegratorOrDifferentiatorEntityData](IntegratorOrDifferentiatorEntityData).                            |
| IntegratorOrDifferentiatorEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [IntegratorOrDifferentiatorEntityData](IntegratorOrDifferentiatorEntityData).                    |
| IntegratorOrDifferentiatorEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [IntegratorOrDifferentiatorEntityData](IntegratorOrDifferentiatorEntityData).              |
| IntegratorOrDifferentiatorEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [IntegratorOrDifferentiatorEntityData](IntegratorOrDifferentiatorEntityData). |

## Properties

| Name       | Type                                   | Description |
| ---------- | -------------------------------------- | ----------- |
| realm      | [Realm](Realm)                         |             |
| updatePass | [EntityUpdateOrder](EntityUpdateOrder) |             |
| startValue | number                                 |             |
| input      | number                                 |             |
| maxValue   | number                                 |             |
| minValue   | number                                 |             |
| bounded    | bool                                   |             |

## Methods

| Type                                                                         | Name            | Parameters                                     |
| ---------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [IntegratorOrDifferentiatorEntityData](IntegratorOrDifferentiatorEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [IntegratorOrDifferentiatorEntityData](IntegratorOrDifferentiatorEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
