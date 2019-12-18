---
title: TimingViewCategory (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| TimingViewCategory()                                                          | Create a new instance of this container type.                                                                               |
| TimingViewCategory(TimingViewCategory other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| TimingViewCategory([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TimingViewCategory](TimingViewCategory). |

## Properties

| Name         | Type       | Description |
| ------------ | ---------- | ----------- |
| categoryName | string     |             |
| keywords     | string\[\] |             |
| spuBudget    | number     |             |
| cpuBudget    | number     |             |
| gpuBudget    | number     |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [TimingViewCategory](TimingViewCategory) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TimingViewCategory](TimingViewCategory) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
