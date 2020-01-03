---
title: AudioGraphNodePort
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| AudioGraphNodePort()                         | Create a new instance of this structure type.            |
| AudioGraphNodePort(AudioGraphNodePort other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type   | Description |
| ---------------- | ------ | ----------- |
| unconnectedValue | number |             |
| valueIndex       | number |             |
| isConnected      | bool   |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) | [Clone](#clone) |            |

### Clone

> [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
