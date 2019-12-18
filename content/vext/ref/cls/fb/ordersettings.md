---
title: OrderSettings (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| OrderSettings()                                                          | Create a new instance of this container type.                                                                     |
| OrderSettings(OrderSettings other)                                       | Create a reference copy of an instance of the same type.                                                          |
| OrderSettings([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [OrderSettings](OrderSettings).                                      |
| OrderSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [OrderSettings](OrderSettings). |

## Properties

| Name   | Type                                 | Description |
| ------ | ------------------------------------ | ----------- |
| orders | [OrderReadiness](OrderReadiness)\[\] |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [OrderSettings](OrderSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [OrderSettings](OrderSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
