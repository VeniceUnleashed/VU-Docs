---
title: VoiceOverValueConnection (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverValueConnection()                                                          | Create a new instance of this container type.                                                                                           |
| VoiceOverValueConnection(VoiceOverValueConnection other)                            | Create a reference copy of an instance of the same type.                                                                                |
| VoiceOverValueConnection([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverValueConnection](VoiceOverValueConnection). |

## Properties

| Name        | Type                                               | Description |
| ----------- | -------------------------------------------------- | ----------- |
| targetNode  | [VoiceOverExpressionNode](VoiceOverExpressionNode) |             |
| targetValue | [VoiceOverValue](VoiceOverValue)                   |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverValueConnection](VoiceOverValueConnection) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverValueConnection](VoiceOverValueConnection) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
