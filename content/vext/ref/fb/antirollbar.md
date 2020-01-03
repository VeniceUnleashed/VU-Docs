---
title: AntiRollBar
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| AntiRollBar()                                                          | Create a new instance of this container type.                                                                 |
| AntiRollBar(AntiRollBar other)                                         | Create a reference copy of an instance of the same type.                                                      |
| AntiRollBar([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntiRollBar](AntiRollBar). |

## Properties

| Name                  | Type   | Description |
| --------------------- | ------ | ----------- |
| stiffness             | number |             |
| torqueActivationLimit | number |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [AntiRollBar](AntiRollBar) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntiRollBar](AntiRollBar) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
