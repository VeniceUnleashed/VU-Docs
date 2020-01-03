---
title: UnlockableColorCollection
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| UnlockableColorCollection()                                                          | Create a new instance of this container type.                                                                                             |
| UnlockableColorCollection(UnlockableColorCollection other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| UnlockableColorCollection([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UnlockableColorCollection](/vext/ref/fb/unlockablecolorcollection/). |

## Properties

| Name           | Type                                           | Description |
| -------------- | ---------------------------------------------- | ----------- |
| defaultValue   | [ColorReference](/vext/ref/fb/colorreference/)               |             |
| possibleValues | [ColorUnlockPartData](/vext/ref/fb/colorunlockpartdata/)\[\] |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UnlockableColorCollection](/vext/ref/fb/unlockablecolorcollection/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UnlockableColorCollection](/vext/ref/fb/unlockablecolorcollection/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
