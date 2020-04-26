---
title: ShaderColorUnlockPartCollection
---

Inherits from [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection)

## Summary

### Constructors

|  |
| --- |
| **[ShaderColorUnlockPartCollection](#constructor-0)**() |
| **[ShaderColorUnlockPartCollection](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ShaderColorUnlockPartCollection](#constructor-2)**(other: [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection)) |
| **[ShaderColorUnlockPartCollection](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "defaultColorReference" >}} | [ColorReference](/vext/ref/fb/colorreference) \| nil |
| {{< prop "unlockParts" >}} | [ColorUnlockPartData](/vext/ref/fb/colorunlockpartdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ShaderColorUnlockPartCollection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ShaderColorUnlockPartCollection {#constructor-0}

> **ShaderColorUnlockPartCollection**()

Creates a new [ShaderColorUnlockPartCollection](/vext/ref/fb/shadercolorunlockpartcollection) frostbite instance.

### ShaderColorUnlockPartCollection {#constructor-1}

> **ShaderColorUnlockPartCollection**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ShaderColorUnlockPartCollection](/vext/ref/fb/shadercolorunlockpartcollection) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ShaderColorUnlockPartCollection {#constructor-2}

> **ShaderColorUnlockPartCollection**(other: [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection))

Casts an instance of type [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection) to [ShaderColorUnlockPartCollection](/vext/ref/fb/shadercolorunlockpartcollection). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection) | The instance to cast to [ShaderColorUnlockPartCollection](/vext/ref/fb/shadercolorunlockpartcollection). |

### ShaderColorUnlockPartCollection {#constructor-3}

> **ShaderColorUnlockPartCollection**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ShaderColorUnlockPartCollection](/vext/ref/fb/shadercolorunlockpartcollection). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ShaderColorUnlockPartCollection](/vext/ref/fb/shadercolorunlockpartcollection). |

## Properties

### {{% prop-heading "defaultColorReference" %}}

> **[ColorReference](/vext/ref/fb/colorreference)** \| **nil**

### {{% prop-heading "unlockParts" %}}

> **[ColorUnlockPartData](/vext/ref/fb/colorunlockpartdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ShaderColorUnlockPartCollection](/vext/ref/fb/shadercolorunlockpartcollection) type.

