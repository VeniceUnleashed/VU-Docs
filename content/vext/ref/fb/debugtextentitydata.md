---
title: DebugTextEntityData
---

Inherits from 
[SpatialEntityData](/vext/ref/fb/spatialentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[DebugTextEntityData](#constructor-0)**() |
| **[DebugTextEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DebugTextEntityData](#constructor-2)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[DebugTextEntityData](#constructor-3)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[DebugTextEntityData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DebugTextEntityData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DebugTextEntityData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "textColor" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "debugText" >}} | string |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "scale" >}} | float |
| {{< prop "visible" >}} | bool |
| {{< prop "centered" >}} | bool |
| {{< prop "depthTest" >}} | bool |
| {{< prop "scaleWithDistance" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DebugTextEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DebugTextEntityData {#constructor-0}
> **DebugTextEntityData**()

Creates a new [DebugTextEntityData](/vext/ref/fb/debugtextentitydata) frostbite instance.

### DebugTextEntityData {#constructor-1}
> **DebugTextEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DebugTextEntityData](/vext/ref/fb/debugtextentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DebugTextEntityData {#constructor-2}
> **DebugTextEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [DebugTextEntityData](/vext/ref/fb/debugtextentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [DebugTextEntityData](/vext/ref/fb/debugtextentitydata). |

### DebugTextEntityData {#constructor-3}
> **DebugTextEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [DebugTextEntityData](/vext/ref/fb/debugtextentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [DebugTextEntityData](/vext/ref/fb/debugtextentitydata). |

### DebugTextEntityData {#constructor-4}
> **DebugTextEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DebugTextEntityData](/vext/ref/fb/debugtextentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DebugTextEntityData](/vext/ref/fb/debugtextentitydata). |

### DebugTextEntityData {#constructor-5}
> **DebugTextEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DebugTextEntityData](/vext/ref/fb/debugtextentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DebugTextEntityData](/vext/ref/fb/debugtextentitydata). |

### DebugTextEntityData {#constructor-6}
> **DebugTextEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebugTextEntityData](/vext/ref/fb/debugtextentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DebugTextEntityData](/vext/ref/fb/debugtextentitydata). |

## Properties
### {{% prop-heading "textColor" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "debugText" %}}
> **string**

### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "scale" %}}
> **float**

### {{% prop-heading "visible" %}}
> **bool**

### {{% prop-heading "centered" %}}
> **bool**

### {{% prop-heading "depthTest" %}}
> **bool**

### {{% prop-heading "scaleWithDistance" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DebugTextEntityData](/vext/ref/fb/debugtextentitydata) type.

