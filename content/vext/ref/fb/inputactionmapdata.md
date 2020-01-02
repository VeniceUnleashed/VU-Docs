---
title: InputActionMapData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| InputActionMapData()                                                          | Create a new instance of this container type.                                                                               |
| InputActionMapData(InputActionMapData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| InputActionMapData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InputActionMapData](InputActionMapData). |

## Properties

| Name                | Type                                             | Description |
| ------------------- | ------------------------------------------------ | ----------- |
| actions             | [InputActionsData](InputActionsData)\[\]         |             |
| platformSpecific    | [InputActionMapPlatform](InputActionMapPlatform) |             |
| slot                | [InputActionMapSlot](InputActionMapSlot)         |             |
| copyKeyBindingsFrom | string                                           |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [InputActionMapData](InputActionMapData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InputActionMapData](InputActionMapData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
