---
title: UICombatAreaCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UICombatAreaCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UICombatAreaCompData(UICombatAreaCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UICombatAreaCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UICombatAreaCompData](UICombatAreaCompData).                  |
| UICombatAreaCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UICombatAreaCompData](UICombatAreaCompData).                                      |
| UICombatAreaCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UICombatAreaCompData](UICombatAreaCompData). |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| outOfAreaSidPrefix | string |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UICombatAreaCompData](UICombatAreaCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UICombatAreaCompData](UICombatAreaCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
