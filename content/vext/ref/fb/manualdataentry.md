---
title: ManualDataEntry
---

## Summary

### Constructors

|  |
| --- |
| **[ManualDataEntry](#constructor-0)**() |
| **[ManualDataEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "platform" >}} | [GamePlatform](/vext/ref/fb/gameplatform) |
| {{< prop "language" >}} | [LanguageFormat](/vext/ref/fb/languageformat) |
| {{< prop "textures" >}} | [TextureAsset](/vext/ref/fb/textureasset)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ManualDataEntry](/vext/ref/fb/manualdataentry) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ManualDataEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ManualDataEntry {#constructor-0}

> **ManualDataEntry**()

Creates a new [ManualDataEntry](/vext/ref/fb/manualdataentry) frostbite instance.

### ManualDataEntry {#constructor-1}

> **ManualDataEntry**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ManualDataEntry](/vext/ref/fb/manualdataentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "platform" %}}

> **[GamePlatform](/vext/ref/fb/gameplatform)**

### {{% prop-heading "language" %}}

> **[LanguageFormat](/vext/ref/fb/languageformat)**

### {{% prop-heading "textures" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)**[]

## Methods

### Clone {#clone}

> **Clone**(): [ManualDataEntry](/vext/ref/fb/manualdataentry)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ManualDataEntry](/vext/ref/fb/manualdataentry)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ManualDataEntry](/vext/ref/fb/manualdataentry) type.

