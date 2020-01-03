---
title: StaticUnlockList
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| StaticUnlockList()                                                          | Create a new instance of this container type.                                                                           |
| StaticUnlockList(StaticUnlockList other)                                    | Create a reference copy of an instance of the same type.                                                                |
| StaticUnlockList([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StaticUnlockList](/vext/ref/fb/staticunlocklist/).                                      |
| StaticUnlockList([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StaticUnlockList](/vext/ref/fb/staticunlocklist/). |

## Properties

| Name        | Type                                   | Description |
| ----------- | -------------------------------------- | ----------- |
| unlockInfos | [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo/)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [StaticUnlockList](/vext/ref/fb/staticunlocklist/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StaticUnlockList](/vext/ref/fb/staticunlocklist/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
