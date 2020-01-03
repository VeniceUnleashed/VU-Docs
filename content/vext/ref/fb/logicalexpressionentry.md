---
title: LogicalExpressionEntry
---
### Base Classes

[AudioGraphNodePortGroup](AudioGraphNodePortGroup)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| LogicalExpressionEntry()                                                          | Create a new instance of this container type.                                                                                       |
| LogicalExpressionEntry(LogicalExpressionEntry other)                              | Create a reference copy of an instance of the same type.                                                                            |
| LogicalExpressionEntry([AudioGraphNodePortGroup](AudioGraphNodePortGroup) other)  | Upcast an instance of type [AudioGraphNodePortGroup](AudioGraphNodePortGroup) to [LogicalExpressionEntry](LogicalExpressionEntry).  |
| LogicalExpressionEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LogicalExpressionEntry](LogicalExpressionEntry). |

## Properties

| Name    | Type                                     | Description |
| ------- | ---------------------------------------- | ----------- |
| trigger | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LogicalExpressionEntry](LogicalExpressionEntry) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LogicalExpressionEntry](LogicalExpressionEntry) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
