---
title: FaceposerComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[FaceposerComponentData](#constructor-0)**() |
| **[FaceposerComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[FaceposerComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[FaceposerComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[FaceposerComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[FaceposerComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "facePoserEnabled" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "lodDistance" >}} | float |
| {{< prop "facePoseLibraryReference" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "facePoseLibrary" >}} | [AntRef](/vext/ref/fb/antref)[] |
| {{< prop "facePoserDofSetName" >}} | string |
| {{< prop "shaderExposedValues" >}} | string[] |
| {{< prop "facePoseLibraryIndex" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FaceposerComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FaceposerComponentData {#constructor-0}

> **FaceposerComponentData**()

Creates a new [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata) frostbite instance.

### FaceposerComponentData {#constructor-1}

> **FaceposerComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### FaceposerComponentData {#constructor-2}

> **FaceposerComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata). |

### FaceposerComponentData {#constructor-3}

> **FaceposerComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata). |

### FaceposerComponentData {#constructor-4}

> **FaceposerComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata). |

### FaceposerComponentData {#constructor-5}

> **FaceposerComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata). |

## Properties

### {{% prop-heading "facePoserEnabled" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "lodDistance" %}}

> **float**

### {{% prop-heading "facePoseLibraryReference" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "facePoseLibrary" %}}

> **[AntRef](/vext/ref/fb/antref)**[]

### {{% prop-heading "facePoserDofSetName" %}}

> **string**

### {{% prop-heading "shaderExposedValues" %}}

> **string**[]

### {{% prop-heading "facePoseLibraryIndex" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FaceposerComponentData](/vext/ref/fb/faceposercomponentdata) type.

