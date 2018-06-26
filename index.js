const assert = require('assert');

/**
 * This wrapper take methods from default assert library to give access to use it from I object.
 * This wrapper allow us to print asserts as steps in output. Also we can expand this lib with different methods and
 * other assertion libraries.
 */
class assertWrapper extends Helper {
  /**
   * https://nodejs.org/api/assert.html#assert_assert_value_message
   * @param {*} actual
   * @param {*} expected
   * @param {string} [message]
   * @returns {*}
   */
  assert(actual, expected, message) {
    return this.assertEqual(actual, expected, message);
  }

  /**
   * https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message
   * @param {*} actual
   * @param {*} expected
   * @param {string} [message]
   * @returns {*}
   */
  assertDeepEqual(actual, expected, message) {
    return assert.deepEqual(actual, expected, message);
  }

  /**
   * https://nodejs.org/api/assert.html#assert_assert_deepstrictequal_actual_expected_message
   * @param {*} actual
   * @param {*} expected
   * @param {string} [message]
   * @returns {*}
   */
  assertDeepStrictEqual(actual, expected, message) {
    return assert.deepStrictEqual(actual, expected, message);
  }

  /**
   * https://nodejs.org/api/assert.html#assert_assert_equal_actual_expected_message
   * @param {*} actual
   * @param {*} expected
   * @param {string} [message]
   * @returns {*}
   */
  assertEqual(actual, expected, message) {
    return assert.equal(actual, expected, message);
  }

  /**
   *
   * @param {*} actual
   * @param {*} expected
   * @param {string} [message]
   * @param {string} [operator]
   * @returns {*}
   */
  assertFail(actual, expected, message, operator) {
    return assert.fail(actual, expected, message, operator);
  }

  /**
   * https://nodejs.org/api/assert.html#assert_assert_fail_message
   * @param {*} value
   * @param {string} [message]
   * @returns {*}
   */
  assertOk(value, message) {
    return assert.ok(value, message);
  }

  /**
   * https://nodejs.org/api/assert.html#assert_assert_notequal_actual_expected_message
   * @param {*} actual
   * @param {*} expected
   * @param {string} [message]
   * @returns {*}
   */
  assertNotEqual(actual, expected, message) {
    return assert.notEqual(actual, expected, message);
  }

  /**
   * https://nodejs.org/api/assert.html#assert_assert_notdeepstrictequal_actual_expected_message
   * @param {*} actual
   * @param {*} expected
   * @param {string} [message]
   * @returns {*}
   */
  assertNotDeepStrictEqual(actual, expected, message) {
    return assert.notDeepStrictEqual(actual, expected, message);
  }

  /**
   * https://nodejs.org/api/assert.html#assert_assert_notdeepequal_actual_expected_message
   * @param {*} actual
   * @param {*} expected
   * @param {string} [message]
   * @returns {*}
   */
  assertNotDeepEqual(actual, expected, message) {
    return assert.notDeepEqual(actual, expected, message);
  }

  /**
   * Custom Asserts
   */

  /**
   * Compare expected and actual status code.
   * @param {*} actual
   * @param {*} expected
   * @returns {*}
   */
  assertStatusCode(actual, expected) {
    return this.assert(
      actual,
      expected,
      `Expected status code to be ${expected}, but found ${actual}`,
    );
  }

  /**
   * Expect that body is not empty
   * @param {*} body
   * @param {string} message
   * @returns {*}
   */
  assertBodyIsNotEmpty(body) {
    return this.assertOk(body, 'body is missing in response');
  }

  /**
   * Check that list of keys are in object
   * @param {string} keys
   * @param {object} obj
   */
  assertKeyInObjectExists(keys, obj) {
    keys = keys.split('.');
    let chain = obj;
    keys.forEach((key) => {
      chain = chain[key];
      this.assertOk(
        chain !== undefined,
        `Expected ${keys} to exists in object, but actual not:( There is no ${key}`,
      );
    });
  }

  /**
   * Check that list of keys are not in object
   * @param {string} keys
   * @param {object} obj
   * @param {string} message
   * @returns {*}
   */
  assertKeyInObjectNotExists(keys, obj) {
    keys = keys.split('.');
    let chain = obj;
    return keys.every((key, index) => {
      chain = chain[key];
      if (chain === undefined) {
        assert.ok(true);
        return false;
      }
      if (index === keys.length - 1) {
        assert.ok(
          false,
          `Expected ${keys} to not exists in object, but it is:(`,
        );
      }
      return true;
    });
  }

  /**
   * Check that each element in array match predicate
   * @param {array} items
   * @param {function} predicate
   * @param {string} message
   */
  assertEach(items, predicate, message) {
    const failed = items.find(i => !predicate(i));

    if (failed) {
      assert.fail(`Item ${failed} don't satisfy predicate: ${predicate}: ${message}`);
    }
  }

  /**
   * Check that array has at least one element that match predicate
   * @param {array} items
   * @param {function} predicate
   * @param {string} message
   */
  assertExists(items, predicate, message) {
    if (!items.find(i => predicate(i))) {
      assert.fail(`Items don't contains element, satisfied by predicate: ${predicate}: ${message}`);
    }
  }

  /**
   * Check that string contains substring
   * @param {string} actual
   * @param {string} substring
   */
  assertStringIncludes(actual, substring) {
    if (actual.indexOf(substring) < 0) {
      assert.fail(`String ${actual} doesn't contain substring ${substring}`);
    }
  }
}

module.exports = assertWrapper;
