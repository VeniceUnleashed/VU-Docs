---
title: VoiceOverGlobalNode
---

Inherits from [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverGlobalNode](#constructor-0)**() |
| **[VoiceOverGlobalNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverGlobalNode](#constructor-2)**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)) |
| **[VoiceOverGlobalNode](#constructor-3)**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode)) |
| **[VoiceOverGlobalNode](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "field" >}} | [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue) \| nil |
| {{< prop "object" >}} | [VoiceOverObject](/vext/ref/fb/voiceoverobject) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverGlobalNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverGlobalNode {#constructor-0}

> **VoiceOverGlobalNode**()

Creates a new [VoiceOverGlobalNode](/vext/ref/fb/voiceoverglobalnode) frostbite instance.

### VoiceOverGlobalNode {#constructor-1}

> **VoiceOverGlobalNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverGlobalNode](/vext/ref/fb/voiceoverglobalnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverGlobalNode {#constructor-2}

> **VoiceOverGlobalNode**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode))

Casts an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) to [VoiceOverGlobalNode](/vext/ref/fb/voiceoverglobalnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) | The instance to cast to [VoiceOverGlobalNode](/vext/ref/fb/voiceoverglobalnode). |

### VoiceOverGlobalNode {#constructor-3}

> **VoiceOverGlobalNode**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode))

Casts an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode) to [VoiceOverGlobalNode](/vext/ref/fb/voiceoverglobalnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverNode](/vext/ref/fb/voiceovernode) | The instance to cast to [VoiceOverGlobalNode](/vext/ref/fb/voiceoverglobalnode). |

### VoiceOverGlobalNode {#constructor-4}

> **VoiceOverGlobalNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverGlobalNode](/vext/ref/fb/voiceoverglobalnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverGlobalNode](/vext/ref/fb/voiceoverglobalnode). |

## Properties

### {{% prop-heading "value" %}}

> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** \| **nil**

### {{% prop-heading "field" %}}

> **[VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue)** \| **nil**

### {{% prop-heading "object" %}}

> **[VoiceOverObject](/vext/ref/fb/voiceoverobject)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverGlobalNode](/vext/ref/fb/voiceoverglobalnode) type.

