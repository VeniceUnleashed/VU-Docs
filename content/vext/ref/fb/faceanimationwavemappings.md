---
title: FaceAnimationWaveMappings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[FaceAnimationWaveMappings](#constructor-0)**() |
| **[FaceAnimationWaveMappings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[FaceAnimationWaveMappings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "antAsset" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "onStartedTalking" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "mappings" >}} | [FaceAnimationWaveMapping](/vext/ref/fb/faceanimationwavemapping)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FaceAnimationWaveMappings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FaceAnimationWaveMappings {#constructor-0}

> **FaceAnimationWaveMappings**()

Creates a new [FaceAnimationWaveMappings](/vext/ref/fb/faceanimationwavemappings) frostbite instance.

### FaceAnimationWaveMappings {#constructor-1}

> **FaceAnimationWaveMappings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FaceAnimationWaveMappings](/vext/ref/fb/faceanimationwavemappings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### FaceAnimationWaveMappings {#constructor-2}

> **FaceAnimationWaveMappings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [FaceAnimationWaveMappings](/vext/ref/fb/faceanimationwavemappings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [FaceAnimationWaveMappings](/vext/ref/fb/faceanimationwavemappings). |

## Properties

### {{% prop-heading "antAsset" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "onStartedTalking" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "mappings" %}}

> **[FaceAnimationWaveMapping](/vext/ref/fb/faceanimationwavemapping)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FaceAnimationWaveMappings](/vext/ref/fb/faceanimationwavemappings) type.

