---
title: EffectReferenceObjectData
---
### Base Classes

[ReferenceObjectData](/vext/ref/fb/referenceobjectdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| EffectReferenceObjectData()                                                          | Create a new instance of this container type.                                                                                             |
| EffectReferenceObjectData(EffectReferenceObjectData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| EffectReferenceObjectData([ReferenceObjectData](/vext/ref/fb/referenceobjectdata/) other)          | Upcast an instance of type [ReferenceObjectData](/vext/ref/fb/referenceobjectdata/) to [EffectReferenceObjectData](/vext/ref/fb/effectreferenceobjectdata/).          |
| EffectReferenceObjectData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EffectReferenceObjectData](/vext/ref/fb/effectreferenceobjectdata/).                    |
| EffectReferenceObjectData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EffectReferenceObjectData](/vext/ref/fb/effectreferenceobjectdata/).              |
| EffectReferenceObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EffectReferenceObjectData](/vext/ref/fb/effectreferenceobjectdata/). |

## Properties

| Name      | Type | Description |
| --------- | ---- | ----------- |
| autoStart | bool |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [EffectReferenceObjectData](/vext/ref/fb/effectreferenceobjectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EffectReferenceObjectData](/vext/ref/fb/effectreferenceobjectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
