---
title: VoiceOverProbabilityNode
---

Inherits from 
[VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverProbabilityNode](#constructor-0)**() |
| **[VoiceOverProbabilityNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverProbabilityNode](#constructor-2)**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)) |
| **[VoiceOverProbabilityNode](#constructor-3)**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode)) |
| **[VoiceOverProbabilityNode](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "falseValue" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "trueValue" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "probability" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverProbabilityNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverProbabilityNode {#constructor-0}
> **VoiceOverProbabilityNode**()

Creates a new [VoiceOverProbabilityNode](/vext/ref/fb/voiceoverprobabilitynode) frostbite instance.

### VoiceOverProbabilityNode {#constructor-1}
> **VoiceOverProbabilityNode**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverProbabilityNode](/vext/ref/fb/voiceoverprobabilitynode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverProbabilityNode {#constructor-2}
> **VoiceOverProbabilityNode**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode))

Casts an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) to [VoiceOverProbabilityNode](/vext/ref/fb/voiceoverprobabilitynode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) | The instance to cast to [VoiceOverProbabilityNode](/vext/ref/fb/voiceoverprobabilitynode). |

### VoiceOverProbabilityNode {#constructor-3}
> **VoiceOverProbabilityNode**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode))

Casts an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode) to [VoiceOverProbabilityNode](/vext/ref/fb/voiceoverprobabilitynode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverNode](/vext/ref/fb/voiceovernode) | The instance to cast to [VoiceOverProbabilityNode](/vext/ref/fb/voiceoverprobabilitynode). |

### VoiceOverProbabilityNode {#constructor-4}
> **VoiceOverProbabilityNode**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverProbabilityNode](/vext/ref/fb/voiceoverprobabilitynode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverProbabilityNode](/vext/ref/fb/voiceoverprobabilitynode). |

## Properties
### {{% prop-heading "falseValue" %}}
> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** | **nil**

### {{% prop-heading "trueValue" %}}
> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** | **nil**

### {{% prop-heading "probability" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverProbabilityNode](/vext/ref/fb/voiceoverprobabilitynode) type.

