---
title: VoiceOverValueConnection
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverValueConnection()                                                          | Create a new instance of this container type.                                                                                           |
| VoiceOverValueConnection(VoiceOverValueConnection other)                            | Create a reference copy of an instance of the same type.                                                                                |
| VoiceOverValueConnection([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverValueConnection](VoiceOverValueConnection). |

## Properties

| Name        | Type                                               | Description |
| ----------- | -------------------------------------------------- | ----------- |
| targetNode  | [VoiceOverExpressionNode](VoiceOverExpressionNode) |             |
| targetValue | [VoiceOverValue](VoiceOverValue)                   |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverValueConnection](VoiceOverValueConnection) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverValueConnection](VoiceOverValueConnection) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
