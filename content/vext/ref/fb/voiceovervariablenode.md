---
title: VoiceOverVariableNode
---

Inherits from 
[VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverVariableNode](#constructor-0)**() |
| **[VoiceOverVariableNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverVariableNode](#constructor-2)**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)) |
| **[VoiceOverVariableNode](#constructor-3)**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode)) |
| **[VoiceOverVariableNode](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "source" >}} | [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverVariableNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverVariableNode {#constructor-0}
> **VoiceOverVariableNode**()

Creates a new [VoiceOverVariableNode](/vext/ref/fb/voiceovervariablenode) frostbite instance.

### VoiceOverVariableNode {#constructor-1}
> **VoiceOverVariableNode**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverVariableNode](/vext/ref/fb/voiceovervariablenode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverVariableNode {#constructor-2}
> **VoiceOverVariableNode**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode))

Casts an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) to [VoiceOverVariableNode](/vext/ref/fb/voiceovervariablenode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) | The instance to cast to [VoiceOverVariableNode](/vext/ref/fb/voiceovervariablenode). |

### VoiceOverVariableNode {#constructor-3}
> **VoiceOverVariableNode**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode))

Casts an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode) to [VoiceOverVariableNode](/vext/ref/fb/voiceovervariablenode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverNode](/vext/ref/fb/voiceovernode) | The instance to cast to [VoiceOverVariableNode](/vext/ref/fb/voiceovervariablenode). |

### VoiceOverVariableNode {#constructor-4}
> **VoiceOverVariableNode**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverVariableNode](/vext/ref/fb/voiceovervariablenode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverVariableNode](/vext/ref/fb/voiceovervariablenode). |

## Properties
### {{% prop-heading "value" %}}
> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** | **nil**

### {{% prop-heading "source" %}}
> **[VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverVariableNode](/vext/ref/fb/voiceovervariablenode) type.

