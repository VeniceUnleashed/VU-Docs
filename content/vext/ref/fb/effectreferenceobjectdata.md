---
title: EffectReferenceObjectData
---
### Base Classes

[ReferenceObjectData](ReferenceObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| EffectReferenceObjectData()                                                          | Create a new instance of this container type.                                                                                             |
| EffectReferenceObjectData(EffectReferenceObjectData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| EffectReferenceObjectData([ReferenceObjectData](ReferenceObjectData) other)          | Upcast an instance of type [ReferenceObjectData](ReferenceObjectData) to [EffectReferenceObjectData](EffectReferenceObjectData).          |
| EffectReferenceObjectData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EffectReferenceObjectData](EffectReferenceObjectData).                    |
| EffectReferenceObjectData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EffectReferenceObjectData](EffectReferenceObjectData).              |
| EffectReferenceObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EffectReferenceObjectData](EffectReferenceObjectData). |

## Properties

| Name      | Type | Description |
| --------- | ---- | ----------- |
| autoStart | bool |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [EffectReferenceObjectData](EffectReferenceObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EffectReferenceObjectData](EffectReferenceObjectData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
