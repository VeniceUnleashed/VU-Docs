---
title: AntiSpamConfig
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| AntiSpamConfig()                     | Create a new instance of this structure type.            |
| AntiSpamConfig(AntiSpamConfig other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                              | Type                             | Description |
| --------------------------------- | -------------------------------- | ----------- |
| detectionInterval                 | number                           |             |
| detectionIntervalMaxMessageCount  | number                           |             |
| serverSideMessageCountTolerance   | number                           |             |
| secondsBlocked                    | number                           |             |
| serverSideSecondsBlockedTolerance | number                           |             |
| notificationSid                   | string                           |             |
| stillBlockedSid                   | string                           |             |
| warningSound                      | [SoundWaveAsset](SoundWaveAsset) |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [AntiSpamConfig](AntiSpamConfig) | [Clone](#clone) |            |

### Clone

> [AntiSpamConfig](AntiSpamConfig) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
