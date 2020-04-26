---
title: PropertyDebugEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[PropertyDebugEntityData](#constructor-0)**() |
| **[PropertyDebugEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PropertyDebugEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[PropertyDebugEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PropertyDebugEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PropertyDebugEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "vec3Value" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "textColor" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "screenPosition" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "transformValue" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "vec2Value" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "valuePrefix" >}} | string |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "floatValue" >}} | float |
| {{< prop "intValue" >}} | int |
| {{< prop "textScale" >}} | float |
| {{< prop "stringValue" >}} | string |
| {{< prop "defaultVisible" >}} | bool |
| {{< prop "boolValue" >}} | bool |
| {{< prop "multiline" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PropertyDebugEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PropertyDebugEntityData {#constructor-0}
> **PropertyDebugEntityData**()

Creates a new [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata) frostbite instance.

### PropertyDebugEntityData {#constructor-1}
> **PropertyDebugEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PropertyDebugEntityData {#constructor-2}
> **PropertyDebugEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata). |

### PropertyDebugEntityData {#constructor-3}
> **PropertyDebugEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata). |

### PropertyDebugEntityData {#constructor-4}
> **PropertyDebugEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata). |

### PropertyDebugEntityData {#constructor-5}
> **PropertyDebugEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata). |

## Properties
### {{% prop-heading "vec3Value" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "textColor" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "screenPosition" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "transformValue" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "vec2Value" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "valuePrefix" %}}
> **string**

### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "floatValue" %}}
> **float**

### {{% prop-heading "intValue" %}}
> **int**

### {{% prop-heading "textScale" %}}
> **float**

### {{% prop-heading "stringValue" %}}
> **string**

### {{% prop-heading "defaultVisible" %}}
> **bool**

### {{% prop-heading "boolValue" %}}
> **bool**

### {{% prop-heading "multiline" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PropertyDebugEntityData](/vext/ref/fb/propertydebugentitydata) type.

