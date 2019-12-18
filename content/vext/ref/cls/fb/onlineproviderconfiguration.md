---
title: OnlineProviderConfiguration (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                    | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| OnlineProviderConfiguration()                                  | Create a new instance of this structure type.            |
| OnlineProviderConfiguration(OnlineProviderConfiguration other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type                         | Description |
| ---------------------- | ---------------------------- | ----------- |
| platform               | [GamePlatform](GamePlatform) |             |
| client                 | string                       |             |
| serviceName            | string                       |             |
| sku                    | string                       |             |
| version                | string                       |             |
| serverSocketPacketSize | number                       |             |
| isServer               | bool                         |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [OnlineProviderConfiguration](OnlineProviderConfiguration) | [Clone](#clone) |            |

### Clone

> [OnlineProviderConfiguration](OnlineProviderConfiguration) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
