---
title: VoiceOverLabelNode
---

Inherits from 
[VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverLabelNode](#constructor-0)**() |
| **[VoiceOverLabelNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverLabelNode](#constructor-2)**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)) |
| **[VoiceOverLabelNode](#constructor-3)**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode)) |
| **[VoiceOverLabelNode](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "sources" >}} | [VoiceOverLabelSource](/vext/ref/fb/voiceoverlabelsource)[] |
| {{< prop "falseValue" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "trueValue" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "wantedLabels" >}} | [VoiceOverLabel](/vext/ref/fb/voiceoverlabel)[] |
| {{< prop "unwantedLabels" >}} | [VoiceOverLabel](/vext/ref/fb/voiceoverlabel)[] |
| {{< prop "sourceMode" >}} | [VoiceOverLabelSourceMode](/vext/ref/fb/voiceoverlabelsourcemode) |
| {{< prop "wantedCompareMode" >}} | [VoiceOverLabelCompareMode](/vext/ref/fb/voiceoverlabelcomparemode) |
| {{< prop "unwantedCompareMode" >}} | [VoiceOverLabelCompareMode](/vext/ref/fb/voiceoverlabelcomparemode) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverLabelNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverLabelNode {#constructor-0}
> **VoiceOverLabelNode**()

Creates a new [VoiceOverLabelNode](/vext/ref/fb/voiceoverlabelnode) frostbite instance.

### VoiceOverLabelNode {#constructor-1}
> **VoiceOverLabelNode**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverLabelNode](/vext/ref/fb/voiceoverlabelnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverLabelNode {#constructor-2}
> **VoiceOverLabelNode**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode))

Casts an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) to [VoiceOverLabelNode](/vext/ref/fb/voiceoverlabelnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) | The instance to cast to [VoiceOverLabelNode](/vext/ref/fb/voiceoverlabelnode). |

### VoiceOverLabelNode {#constructor-3}
> **VoiceOverLabelNode**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode))

Casts an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode) to [VoiceOverLabelNode](/vext/ref/fb/voiceoverlabelnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverNode](/vext/ref/fb/voiceovernode) | The instance to cast to [VoiceOverLabelNode](/vext/ref/fb/voiceoverlabelnode). |

### VoiceOverLabelNode {#constructor-4}
> **VoiceOverLabelNode**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverLabelNode](/vext/ref/fb/voiceoverlabelnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverLabelNode](/vext/ref/fb/voiceoverlabelnode). |

## Properties
### {{% prop-heading "sources" %}}
> **[VoiceOverLabelSource](/vext/ref/fb/voiceoverlabelsource)**[]

### {{% prop-heading "falseValue" %}}
> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** | **nil**

### {{% prop-heading "trueValue" %}}
> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** | **nil**

### {{% prop-heading "wantedLabels" %}}
> **[VoiceOverLabel](/vext/ref/fb/voiceoverlabel)**[]

### {{% prop-heading "unwantedLabels" %}}
> **[VoiceOverLabel](/vext/ref/fb/voiceoverlabel)**[]

### {{% prop-heading "sourceMode" %}}
> **[VoiceOverLabelSourceMode](/vext/ref/fb/voiceoverlabelsourcemode)**

### {{% prop-heading "wantedCompareMode" %}}
> **[VoiceOverLabelCompareMode](/vext/ref/fb/voiceoverlabelcomparemode)**

### {{% prop-heading "unwantedCompareMode" %}}
> **[VoiceOverLabelCompareMode](/vext/ref/fb/voiceoverlabelcomparemode)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverLabelNode](/vext/ref/fb/voiceoverlabelnode) type.

