---
title: HudProgressbarData
---
### Base Classes

[UIPartData](UIPartData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| HudProgressbarData()                                                          | Create a new instance of this container type.                                                                               |
| HudProgressbarData(HudProgressbarData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| HudProgressbarData([UIPartData](UIPartData) other)                            | Upcast an instance of type [UIPartData](UIPartData) to [HudProgressbarData](HudProgressbarData).                            |
| HudProgressbarData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HudProgressbarData](HudProgressbarData). |

## Properties

| Name         | Type                         | Description |
| ------------ | ---------------------------- | ----------- |
| progressType | [ProgressType](ProgressType) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [HudProgressbarData](HudProgressbarData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HudProgressbarData](HudProgressbarData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
