---
title: VoiceOverArithmeticNode
---

Inherits from 
[VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverArithmeticNode](#constructor-0)**() |
| **[VoiceOverArithmeticNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverArithmeticNode](#constructor-2)**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)) |
| **[VoiceOverArithmeticNode](#constructor-3)**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode)) |
| **[VoiceOverArithmeticNode](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "a" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection) \| nil |
| {{< prop "b" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection) \| nil |
| {{< prop "result" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "operation" >}} | [VoiceOverArithmeticExpressionType](/vext/ref/fb/voiceoverarithmeticexpressiontype) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverArithmeticNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverArithmeticNode {#constructor-0}
> **VoiceOverArithmeticNode**()

Creates a new [VoiceOverArithmeticNode](/vext/ref/fb/voiceoverarithmeticnode) frostbite instance.

### VoiceOverArithmeticNode {#constructor-1}
> **VoiceOverArithmeticNode**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverArithmeticNode](/vext/ref/fb/voiceoverarithmeticnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverArithmeticNode {#constructor-2}
> **VoiceOverArithmeticNode**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode))

Casts an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) to [VoiceOverArithmeticNode](/vext/ref/fb/voiceoverarithmeticnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) | The instance to cast to [VoiceOverArithmeticNode](/vext/ref/fb/voiceoverarithmeticnode). |

### VoiceOverArithmeticNode {#constructor-3}
> **VoiceOverArithmeticNode**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode))

Casts an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode) to [VoiceOverArithmeticNode](/vext/ref/fb/voiceoverarithmeticnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverNode](/vext/ref/fb/voiceovernode) | The instance to cast to [VoiceOverArithmeticNode](/vext/ref/fb/voiceoverarithmeticnode). |

### VoiceOverArithmeticNode {#constructor-4}
> **VoiceOverArithmeticNode**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverArithmeticNode](/vext/ref/fb/voiceoverarithmeticnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverArithmeticNode](/vext/ref/fb/voiceoverarithmeticnode). |

## Properties
### {{% prop-heading "a" %}}
> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)** | **nil**

### {{% prop-heading "b" %}}
> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)** | **nil**

### {{% prop-heading "result" %}}
> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** | **nil**

### {{% prop-heading "operation" %}}
> **[VoiceOverArithmeticExpressionType](/vext/ref/fb/voiceoverarithmeticexpressiontype)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverArithmeticNode](/vext/ref/fb/voiceoverarithmeticnode) type.

