---
title: TimingViewCategories
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| TimingViewCategories()                                                          | Create a new instance of this container type.                                                                                   |
| TimingViewCategories(TimingViewCategories other)                                | Create a reference copy of an instance of the same type.                                                                        |
| TimingViewCategories([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [TimingViewCategories](TimingViewCategories).                                      |
| TimingViewCategories([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TimingViewCategories](TimingViewCategories). |

## Properties

| Name             | Type                                         | Description |
| ---------------- | -------------------------------------------- | ----------- |
| timingCategories | [TimingViewCategory](TimingViewCategory)\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [TimingViewCategories](TimingViewCategories) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TimingViewCategories](TimingViewCategories) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
