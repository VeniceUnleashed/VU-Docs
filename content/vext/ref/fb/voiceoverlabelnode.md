---
title: VoiceOverLabelNode
---
### Base Classes

[VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverLabelNode()                                                          | Create a new instance of this container type.                                                                               |
| VoiceOverLabelNode(VoiceOverLabelNode other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| VoiceOverLabelNode([VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) other)  | Upcast an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) to [VoiceOverLabelNode](/vext/ref/fb/voiceoverlabelnode/).  |
| VoiceOverLabelNode([VoiceOverNode](/vext/ref/fb/voiceovernode/) other)                      | Upcast an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode/) to [VoiceOverLabelNode](/vext/ref/fb/voiceoverlabelnode/).                      |
| VoiceOverLabelNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverLabelNode](/vext/ref/fb/voiceoverlabelnode/). |

## Properties

| Name                | Type                                                   | Description |
| ------------------- | ------------------------------------------------------ | ----------- |
| sources             | [VoiceOverLabelSource](/vext/ref/fb/voiceoverlabelsource/)\[\]       |             |
| falseValue          | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)                       |             |
| trueValue           | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)                       |             |
| wantedLabels        | [VoiceOverLabel](/vext/ref/fb/voiceoverlabel/)\[\]                   |             |
| unwantedLabels      | [VoiceOverLabel](/vext/ref/fb/voiceoverlabel/)\[\]                   |             |
| sourceMode          | [VoiceOverLabelSourceMode](/vext/ref/fb/voiceoverlabelsourcemode/)   |             |
| wantedCompareMode   | [VoiceOverLabelCompareMode](/vext/ref/fb/voiceoverlabelcomparemode/) |             |
| unwantedCompareMode | [VoiceOverLabelCompareMode](/vext/ref/fb/voiceoverlabelcomparemode/) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverLabelNode](/vext/ref/fb/voiceoverlabelnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverLabelNode](/vext/ref/fb/voiceoverlabelnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
