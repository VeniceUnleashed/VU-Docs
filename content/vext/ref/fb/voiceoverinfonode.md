---
title: VoiceOverInfoNode
---

Inherits from 
[VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverInfoNode](#constructor-0)**() |
| **[VoiceOverInfoNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverInfoNode](#constructor-2)**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)) |
| **[VoiceOverInfoNode](#constructor-3)**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode)) |
| **[VoiceOverInfoNode](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "object" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection) \| nil |
| {{< prop "value" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "field" >}} | [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue) \| nil |
| {{< prop "expectedType" >}} | [VoiceOverObject](/vext/ref/fb/voiceoverobject) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverInfoNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverInfoNode {#constructor-0}
> **VoiceOverInfoNode**()

Creates a new [VoiceOverInfoNode](/vext/ref/fb/voiceoverinfonode) frostbite instance.

### VoiceOverInfoNode {#constructor-1}
> **VoiceOverInfoNode**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverInfoNode](/vext/ref/fb/voiceoverinfonode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverInfoNode {#constructor-2}
> **VoiceOverInfoNode**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode))

Casts an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) to [VoiceOverInfoNode](/vext/ref/fb/voiceoverinfonode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) | The instance to cast to [VoiceOverInfoNode](/vext/ref/fb/voiceoverinfonode). |

### VoiceOverInfoNode {#constructor-3}
> **VoiceOverInfoNode**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode))

Casts an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode) to [VoiceOverInfoNode](/vext/ref/fb/voiceoverinfonode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverNode](/vext/ref/fb/voiceovernode) | The instance to cast to [VoiceOverInfoNode](/vext/ref/fb/voiceoverinfonode). |

### VoiceOverInfoNode {#constructor-4}
> **VoiceOverInfoNode**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverInfoNode](/vext/ref/fb/voiceoverinfonode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverInfoNode](/vext/ref/fb/voiceoverinfonode). |

## Properties
### {{% prop-heading "object" %}}
> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)** | **nil**

### {{% prop-heading "value" %}}
> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** | **nil**

### {{% prop-heading "field" %}}
> **[VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue)** | **nil**

### {{% prop-heading "expectedType" %}}
> **[VoiceOverObject](/vext/ref/fb/voiceoverobject)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverInfoNode](/vext/ref/fb/voiceoverinfonode) type.

