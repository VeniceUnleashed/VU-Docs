---
title: ShaderCustomizationUnlockPartCollection
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[ShaderCustomizationUnlockPartCollection](#constructor-0)**() |
| **[ShaderCustomizationUnlockPartCollection](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ShaderCustomizationUnlockPartCollection](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "meshBlueprints" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint)[] |
| {{< prop "shaderNodeName" >}} | string |
| {{< prop "meshMaterials" >}} | [CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ShaderCustomizationUnlockPartCollection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ShaderCustomizationUnlockPartCollection {#constructor-0}

> **ShaderCustomizationUnlockPartCollection**()

Creates a new [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection) frostbite instance.

### ShaderCustomizationUnlockPartCollection {#constructor-1}

> **ShaderCustomizationUnlockPartCollection**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ShaderCustomizationUnlockPartCollection {#constructor-2}

> **ShaderCustomizationUnlockPartCollection**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection). |

## Properties

### {{% prop-heading "meshBlueprints" %}}

> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)**[]

### {{% prop-heading "shaderNodeName" %}}

> **string**

### {{% prop-heading "meshMaterials" %}}

> **[CustomizedMeshMaterialsData](/vext/ref/fb/customizedmeshmaterialsdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection) type.

